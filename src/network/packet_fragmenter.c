#include <windows.h>

typedef struct PacketFragment {
    BYTE data[1024];
    DWORD size;
    DWORD seq;
} PacketFragment;

void FragmentPacket(BYTE* packet, DWORD size, PacketFragment* fragments, DWORD* count) {
    DWORD fragmentSize = 500;
    *count = (size + fragmentSize - 1) / fragmentSize;
    
    for (DWORD i = 0; i < *count; i++) {
        fragments[i].seq = i;
        fragments[i].size = min(fragmentSize, size - i * fragmentSize);
        memcpy(fragments[i].data, packet + i * fragmentSize, fragments[i].size);
    }
}
