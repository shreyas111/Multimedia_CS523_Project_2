from flask import Flask, render_template, request
from flask import jsonify

#app = Flask(__name__)
app = Flask(__name__,static_url_path="/static")

#@app.route("/") 
#def hello(): 
    #return render_template("testhtml.html")

    #def hello1(): 
    #return "Hello World!"

@app.route("/user/<username>") 
def name(username): 
    return "User %s " % username


# Routing
@app.route('/message', methods=['POST'])
def reply():
	return jsonify( { 'text': translate.decode_line(sess, model, en_vocab, rev_en1_vocab, request.form['msg'] ) } )
	'''msg = request.form['msg']
	temp1 = msg.split("!")
	if temp1[0] == "CH":
		return jsonify( { 'text': translate.decode_line(sess, model, en_vocab, rev_en1_vocab, request.form['msg'] ) } )
	else:
		tsess = tf.Session()
		tsess, tmodel, ten_vocab, rev_ten1_vocab = translate.tinit_session(tsess)
		return jsonify( { 'text': translate.tdecode_line(tsess, tmodel, ten_vocab, rev_ten1_vocab, request.form['msg'] ) } )'''


'''@app.route('/translate', methods=['POST'])
def reply():
    return jsonify( { 'text': translate.tdecode_line(tsess, tmodel, ten_vocab, rev_ten1_vocab, request.form['msg'] ) } ) '''

@app.route("/")
def index(): 
    return render_template("index.html")

# Init seq2seq model
import tensorflow as tf
import translate

sess = tf.Session()
sess, model, en_vocab, rev_en1_vocab = translate.init_session(sess)

'''tsess = tf.Session()
tsess, tmodel, ten_vocab, rev_ten1_vocab = translate.tinit_session(tsess)'''

if (__name__ == "__main__"): 
    app.run(port = 5001) 