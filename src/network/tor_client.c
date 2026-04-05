#include <winsock2.h>

int ConnectToTor(const char* torAddress, int torPort) {
    SOCKET sock = socket(AF_INET, SOCK_STREAM, 0);
    struct sockaddr_in addr;
    addr.sin_family = AF_INET;
    addr.sin_port = htons(torPort);
    inet_pton(AF_INET, torAddress, &addr.sin_addr);
    
    connect(sock, (struct sockaddr*)&addr, sizeof(addr));
    
    // Send SOCKS5 handshake
    const char handshake[] = { 0x05, 0x01, 0x00 };
    send(sock, handshake, sizeof(handshake), 0);
    
    return sock;
}
