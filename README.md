# Multimedia_CS523_Project_2

This repository is created as a deliverable for Project 2 in CS-523 (Spring 2017) offered at University of Illinois at Chicago.

## Project Members:
1. Kruti Sharma
2. Hengbin Li
3. Shreyas Kulkarni

As a part of this project we had an option to implement a recurrent neural network for any of the following options usin tensor flow.

1. Develop an RNN that can generate a story/poem/lyrics/articles in the style of an author or genre of your choice.
2. Develop a chatbot using an RNN that responds in the style of a particular user group or user.
3. Develop an RNN that can generate accurate sequences of cellularautomata (e.g., game of life, or CA with more elaborate rules)

We decided to implement the option 2 of developing a Chat bot using RNN (Recurrent Neural Network) in Tensor Flow. 
We searched for multiple repositories which we could modify to develop the chat bot which outputs data in our own style.

## Our repository has the following three folders:
### 1. Translate (Without UI): 
This folder contains code for a chatbot which gives output for English sentences in the style of movie dialog 
corpus. There is no UI for this project which the user can use to chat.
### 2. English to German Translations (With UI) : 
This folder contains code for a chatbot which translates English sentences to 
German sentences.
### 3. English to English Conversations (With UI): 
This folder contains contains code for a chatbot which gives output for English sentences 
in the style of movie dialog corpus. There is a UI which the user can use to chat with the chat bot.

## Creating A Tensor Flow Environment to Run the Projects in Anaconda:
Steps:
We have run the projects on python 3.5 so we recommend to run on python 3.5 enviornment.
After installing [Anaconda](https://www.continuum.io/downloads), you should create a [conda environment](http://conda.pydata.org/docs/using/envs.html)
so you do not destroy your main installation in case you make a mistake somewhere:

    conda create --name tf python=3.5

Now you can switch to the new environment by running the following (on Linux):

    source activate tf

Some of these tutorials use [scikit-learn](http://scikit-learn.org/stable/install.html)
which can be installed in your new conda environment as follows. This also installs
NumPy and other dependencies:

    conda install scikit-learn

You may also need to install other dependencies, such as:

    conda install jupyter matplotlib scipy pillow

Now you have to install TensorFlow. In order to train the model on your own it is recomended to install a GPU version of Tensor Flow.
To run the GPU version of Tensor Flow you will need a NVIDIA GPU with a compute capability of 3.0 or aboove. To find a list of GPU's 
which are can be used to run GPU version on Tensor Flow visit the following link: https://developer.nvidia.com/cuda-gpus. It is much more complicated to install the GPU-version because you also need various NVIDIA drivers.
That is not described here.

If you just want to use the pre trained RNN models to interact with the chatbots you can install the CPU-version of TensorFlow by running the following command. 

    pip install tensorflow prettytensor
    or
    pip install --ignore-installed --upgrade https://storage.googleapis.com/tensorflow/windows/cpu/tensorflow-1.0.0-cp35-cp35m-    win_x86_64.whl 


## Running the Projects:
### Translate:
#### Steps:
1. Download the Project.
2. For training, run the command: python Translate.py in the command prompt in a python environment which has tensor flow installed.
3. For chatting with the trained model, run the command python Translate.py --decode in a python environment which has tensor flow installed.
