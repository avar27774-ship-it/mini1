#include <ntddk.h>
#include <wdm.h>
#include "driver.h"

NTSTATUS CreateDevice(PDRIVER_OBJECT DriverObject);
VOID DriverUnload(PDRIVER_OBJECT DriverObject);
VOID BypassDSE();
VOID DisablePatchGuard();
VOID SpoofAllHardwareIDs();
NTSTATUS HideDriver(PDRIVER_OBJECT DriverObject);

#ifdef __cplusplus
extern "C"
#endif
NTSTATUS DriverEntry(PDRIVER_OBJECT DriverObject, PUNICODE_STRING RegistryPath) {
    DbgPrint("[MajesticCrypt] DriverEntry called\n");
    
    BypassDSE();
    DisablePatchGuard();
    SpoofAllHardwareIDs();
    
    NTSTATUS status = CreateDevice(DriverObject);
    if (!NT_SUCCESS(status)) {
        DbgPrint("[MajesticCrypt] Failed to create device\n");
        return status;
    }
    
    DriverObject->DriverUnload = DriverUnload;
    DbgPrint("[MajesticCrypt] Driver loaded successfully\n");
    return STATUS_SUCCESS;
}

NTSTATUS CreateDevice(PDRIVER_OBJECT DriverObject) {
    NTSTATUS status;
    PDEVICE_OBJECT pDeviceObject = NULL;
    UNICODE_STRING devName;
    
    RtlInitUnicodeString(&devName, L"\\Device\\MajesticCrypt");
    status = IoCreateDevice(DriverObject, 0, &devName, FILE_DEVICE_UNKNOWN, 0, FALSE, &pDeviceObject);
    if (!NT_SUCCESS(status)) return status;
    
    UNICODE_STRING symLinkName;
    RtlInitUnicodeString(&symLinkName, L"\\DosDevices\\MajesticCrypt");
    status = IoCreateSymbolicLink(&symLinkName, &devName);
    if (!NT_SUCCESS(status)) {
        IoDeleteDevice(pDeviceObject);
        return status;
    }
    
    pDeviceObject->Flags |= DO_DIRECT_IO;
    pDeviceObject->Flags &= ~DO_DEVICE_INITIALIZING;
    
    return STATUS_SUCCESS;
}

VOID DriverUnload(PDRIVER_OBJECT DriverObject) {
    DbgPrint("[MajesticCrypt] Driver unloading\n");
    UNICODE_STRING symLinkName;
    RtlInitUnicodeString(&symLinkName, L"\\DosDevices\\MajesticCrypt");
    IoDeleteSymbolicLink(&symLinkName);
    IoDeleteDevice(DriverObject->DeviceObject);
    DbgPrint("[MajesticCrypt] Driver unloaded\n");
}
