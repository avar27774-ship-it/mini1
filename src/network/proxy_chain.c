#include <winsock2.h>

typedef struct ProxyNode {
    char host[256];
    int port;
    struct ProxyNode* next;
} ProxyNode;

ProxyNode* CreateProxyChain(const char** proxies, int count) {
    ProxyNode* head = NULL;
    ProxyNode* current = NULL;
    
    for (int i = 0; i < count; i++) {
        ProxyNode* node = (ProxyNode*)malloc(sizeof(ProxyNode));
        sscanf(proxies[i], "%[^:]:%d", node->host, &node->port);
        node->next = NULL;
        
        if (!head) head = node;
        if (current) current->next = node;
        current = node;
    }
    
    return head;
}
