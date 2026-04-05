#include <math.h>

typedef struct Neuron {
    double* weights;
    double bias;
    double output;
} Neuron;

typedef struct Layer {
    Neuron* neurons;
    int count;
} Layer;

typedef struct NeuralNetwork {
    Layer* layers;
    int layerCount;
} NeuralNetwork;

double Sigmoid(double x) {
    return 1.0 / (1.0 + exp(-x));
}

void FeedForward(NeuralNetwork* nn, double* input, double* output) {
    // Forward propagation
}
