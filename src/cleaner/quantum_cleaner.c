#include <windows.h>

VOID QuantumClean(VOID) {
    // Quantum entropy cleanup
    system("certutil -delkey -f quantum");
}
