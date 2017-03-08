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
3.  https://github.com/suriyadeepan/easy_seq2seq/tree/master/ui

For more explaination about the original repositories, the process we followed to create our own chat bots and our repository by modifying some code from these original repositories please take a look at the word document <b>'CS 523 Project2.docx'</b> which can be found in the Translate folder.  

## Our Repository: 
Our repository has been creaded by modifying and using the code present in the original repositories. Our repository has the following  folders inside the Translate Folder:
.
### 1. English to German Translations (With UI) : 
This folder contains code for a chatbot which translates English sentences to 
German sentences. There is a UI the user can use in which the user can use for translating English sentences to German.
#### Youtube video link: https://youtu.be/oqhdWU7Byjs

### 2. English to English Conversations (With UI): 
This folder contains contains code for a chatbot which gives output for English sentences 
in the style of movie dialog corpus. There is a UI which the user can use to chat with the chat bot.
### Youtube video link: https://youtu.be/QLBNKY_AJkU

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
The folders English to German Translations and English to English Conversations present inside the Translaye folder in our repository is a separate project. Following are the steps to run each project.

### English to German Translations:
#### Steps:
1. Download the repository and open the folder 'English to German Translations' in Command Prompt/Terminal. 
2. For Training the model, run the command "python translate.py" -  Running this command will start training the model on the training data files present in English to German Translation\temp\eng-german folder. This folder contains 4 files which are as follows: train.en (english sentences userd for training), train.en1 (German sentence translations of the English sentences used for training) , test.en (English sentences used for testing), test.en1 (German sentence translations of the English sentences used for testing). As the training proceeds the program will save all the training related files all in the same folder.
3. For Testing the model with your won senteneces, run the following command "python translate.py --decode" - Running this command will use the trained model (fetch the last saved checkpoint of the model) and once the model is loaded , the user will see ">" where the user can enter english lines to get the german translation.
4. For using the UI: run the "python webui.py" and once the command prompt shows "Running on http://127.0.0.1/5001/" user can run this to start interacting with the chatbot.

###  English to English Conversations:
#### Steps:
1. Download the repository and open the folder 'English to English Conversations' in Command Prompt/Terminal. 
2. For Training the model, run the command "python translate.py" - Running this will start training the model on the files present in English to English Conversation\temp\eng-eng. This folder contains 4 files which are as follows: train.en (english movie conversation used for training), train.en1 (english movie conversation replies to the training sentences) , test.en (english movie conversation used for testing), test.en1 (English movie conversation replies to the testing sentences). As the training proceeds, all the training related files will be saved in the same folder.
3. For Testing the model with your own sentences, run the command "python translate.py --decode" - this will use the trained model (fetch the last saved checkpoint of the model) and once the model is loaded , the user will see ">" where the user can enter movie dialogues to get the reply as some other movie dialogues.
4. For using the UI, run the "python webui.py" and once the command prompt shows "Running on http://127.0.0.1/5001/" user can run this to start interacting with the chatbot.

### Training your own data set:
### Steps:
1. Download the repository and copy any one folder: English to English or English or English to German and rename it to your choice.
2. Now in order to train your own files, you must have for files - train.en, train.en1, test.en, test.en1 (the extensions are given by our choice, so you can rename ur files with these extensions in order to run the code smoothly). train.en - is the encoder file and train.en1- is the decoder file.
3. Prepare your dataset (the above four files) and create a new folder in temp (ex: eng-eng in English to English Translation). Copy the training and test files in this new folder.
4. Copy the folder name and open translate.py. Repalce dataTrainDir parameter defined in train(), decode() to your folder name in present in temp.
5. Once the folder is renamed and files are present in the new folder, you follow the same steps as mentioned above for training and testing.
