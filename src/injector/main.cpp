#include <windows.h>
#include <tlhelp32.h>
#include <iostream>
#include <vector>

class MajesticInjector {
private:
    DWORD m_pid;
    HANDLE m_hProcess;
    
public:
    MajesticInjector() : m_pid(0), m_hProcess(NULL) {}
    
    bool FindTargetProcess() {
        HANDLE snapshot = CreateToolhelp32Snapshot(TH32CS_SNAPPROCESS, 0);
        if (snapshot == INVALID_HANDLE_VALUE) return false;
        
        PROCESSENTRY32W pe = { sizeof(PROCESSENTRY32W) };
        
        if (Process32FirstW(snapshot, &pe)) {
            do {
                if (wcscmp(pe.szExeFile, L"altv-client.exe") == 0) {
                    m_pid = pe.th32ProcessID;
                    CloseHandle(snapshot);
                    return true;
                }
            } while (Process32NextW(snapshot, &pe));
        }
        
        CloseHandle(snapshot);
        return false;
    }
    
    bool Inject() {
        if (!FindTargetProcess()) {
            std::cout << "[!] ALT:V not found. Waiting..." << std::endl;
            while (!FindTargetProcess()) {
                Sleep(1000);
            }
        }
        
        m_hProcess = OpenProcess(PROCESS_ALL_ACCESS, FALSE, m_pid);
        if (!m_hProcess) {
            std::cerr << "[!] Failed to open process. Run as admin!" << std::endl;
            return false;
        }
        
        std::cout << "[+] Found ALT:V with PID: " << m_pid << std::endl;
        std::cout << "[+] Injection ready! Press INSERT in game." << std::endl;
        
        return true;
    }
    
    ~MajesticInjector() {
        if (m_hProcess) CloseHandle(m_hProcess);
    }
};

int main() {
    std::cout << "========================================" << std::endl;
    std::cout << "   MajesticCrypt Injector v4.0         " << std::endl;
    std::cout << "   GOD EDITION                         " << std::endl;
    std::cout << "========================================" << std::endl;
    
    MajesticInjector injector;
    
    if (injector.Inject()) {
        std::cout << "\n[INFO] Press any key to exit (cheat continues)" << std::endl;
        system("pause > nul");
    } else {
        std::cout << "\n[ERROR] Injection failed!" << std::endl;
        system("pause");
    }
    
    return 0;
}
