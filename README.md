# Multimedia_CS523_Project_2

This repository is created as a deliverable for Project 2 for CS-523 course offered in Spring 2017 at University of Illinois at Chicago.

## Project Members:
1. Kruti Sharma
2. Hengbin Li
3. Shreyas Kulkarni

As a part of this project we had an option to implement a recurrent neural network for any of the following options using tensor flow.

1. Develop an RNN that can generate a story/poem/lyrics/articles in the style of an author or genre of your choice.
2. Develop a chatbot using an RNN that responds in the style of a particular user group or user.
3. Develop an RNN that can generate accurate sequences of cellularautomata (e.g., game of life, or CA with more elaborate rules)

We decided to implement the option 2 of developing a Chat bot using RNN (Recurrent Neural Network) in Tensor Flow. 
We searched for multiple repositories which we could modify to develop the chat bot which outputs data in our own style.

## Original Repositories:
Following are the original repositories:

1.	https://github.com/b0noI/dialog_converter/tree/simaple_input_generator (Repository 1)
2.	https://github.com/b0noI/tensorflow/tree/r0.11/tensorflow/models/rnn/translate

For more explaination about the original repositories and the process we followed to create our own chat bots and our repository by modifying some code from these original repositories please take a look at the word document <b>'CS 523 Project2.docx'</b> which is can be found in the root folder.  

## Our Repository: 
Our repository has been creaded by modifying and using the code present in the original repositories. Our repository has the following three folders:
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
### Steps:
1. We have run the projects on python 3.5 so we recommend to run on python 3.5 enviornment.
2. After installing [Anaconda](https://www.continuum.io/downloads), you should create a [conda environment](http://conda.pydata.org/docs/using/envs.html) so you do not destroy your main installation in case you make a mistake somewhere:

    conda create --name tf python=3.5

3. Now you can switch to the new environment by running the following on Linux:
    
    source activate tf                                             
    

4. Some of these tutorials use [scikit-learn](http://scikit-learn.org/stable/install.html) which can be installed in your new conda environment as follows. This also installs NumPy and other dependencies:

    conda install scikit-learn

5. You may also need to install other dependencies, such as:

    conda install jupyter matplotlib scipy pillow

6. Innstall TensorFlow. 
In order to train the model on your own it is recomended to install a GPU version of Tensor Flow.
To run the GPU version of Tensor Flow you will need a NVIDIA GPU with a compute capability of 3.0 or aboove. To find a list of GPU's 
which are can be used to run GPU version on Tensor Flow visit the following link: https://developer.nvidia.com/cuda-gpus. It is much more complicated to install the GPU-version because you also need various NVIDIA drivers.
That is not described here.

If you just want to use the pre trained RNN models to interact with the chatbots you can install the CPU-version of TensorFlow by running the following command. 

    pip install tensorflow prettytensor
    or
    pip install --ignore-installed --upgrade https://storage.googleapis.com/tensorflow/windows/cpu/tensorflow-1.0.0-cp35-cp35m-    win_x86_64.whl 


## Running the Projects:
Each folder in our repository is a separate project. Following are the steps to rrun each project.

### Translate:
#### Steps:
1. Download the Project.
2. For training, run the command: python Translate.py in the command prompt in a python 3.5 environment which has tensor flow installed.
3. For chatting with the trained model, run the command python Translate.py --decode in a python 3.5 environment which has tensor flow installed.

### English to German Translations:
#### Steps:

###  English to English Conversations
#### Steps:
