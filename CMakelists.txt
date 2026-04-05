cmake_minimum_required(VERSION 3.10)
project(MajesticCrypt)

set(CMAKE_CXX_STANDARD 17)

add_executable(Majestic_Injector
    src/injector/main.cpp
    src/injector/reflective_loader.c
)

add_executable(cleaner_ultimate
    src/cleaner/cleaner_ultimate.c
)

target_compile_options(Majestic_Injector PRIVATE -O2 -static)
target_compile_options(cleaner_ultimate PRIVATE -O2 -static)
