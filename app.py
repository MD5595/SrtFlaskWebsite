from flask import Flask, render_template

app = Flask(__name__)
app.config['SECRET_KEY'] = 'Keeey'
app_name = 'myapp'


@app.route("/")
def homepage():
    return render_template('home.html')

@app.route('/article_home')
def article_homepage():
    return render_template('Articles/article_home.html')

@app.route('/syllabus')
def index_page():
    return render_template('syllabus.html')
@app.route('/u1.1')
def Unit1_1():
    return render_template('Articles/Unit1/u1.1.html')
@app.route('/u1.2')
def Unit1_2():
    return render_template('Articles/Unit1/u1.2.html')
@app.route('/u1.3')
def Unit1_3():
    return render_template('Articles/Unit1/u1.3.html')
@app.route('/u1.4')
def Unit1_4():
    return render_template('Articles/Unit1/u1.4.html')
@app.route('/u1.5')
def Unit1_5():
    return render_template('Articles/Unit1/u1.5.html')
@app.route('/u2.1')
def Unit2_1():
    return render_template('Articles/Unit2/u2.1.html')

@app.route('/u2.2')
def Unit2_2():
    return render_template('Articles/Unit2/u2.2.html')

@app.route('/u2.3')
def Unit2_3():
    return render_template('Articles/Unit2/u2.3.html')

@app.route('/u3.1')
def Unit3_1():
    return render_template('Articles/Unit3/u3.1.html')

@app.route('/u3.2')
def Unit3_2():
    return render_template('Articles/Unit3/u3.2.html')

@app.route('/u4.1')
def Unit4_1():
    return render_template('Articles/Unit4/u4.1.html')

@app.route('/u4.2')
def Unit4_2():
    return render_template('Articles/Unit4/u4.2.html')

@app.route('/u5.1')
def Unit5_1():
    return render_template('Articles/Unit5/u5.1.html')

@app.route('/u6.1')
def Unit6_1():
    return render_template('Articles/Unit6/u6.1.html')

@app.route('/u6.2')
def Unit6_2():
    return render_template('Articles/Unit6/u6.2.html')


if __name__ == '__main__':
    app.run(debug=True)