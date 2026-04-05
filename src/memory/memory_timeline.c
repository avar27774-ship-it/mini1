#include <windows.h>

typedef struct MemorySnapshot {
    PVOID address;
    BYTE data[256];
    DWORD size;
    DWORD64 timestamp;
} MemorySnapshot;

MemorySnapshot snapshots[1000];
int snapshotCount = 0;

VOID TakeMemorySnapshot(PVOID address, DWORD size) {
    if (snapshotCount < 1000) {
        snapshots[snapshotCount].address = address;
        snapshots[snapshotCount].size = size;
        snapshots[snapshotCount].timestamp = GetTickCount64();
        memcpy(snapshots[snapshotCount].data, address, size);
        snapshotCount++;
    }
}
