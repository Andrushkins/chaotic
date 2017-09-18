import React, { Component } from 'react';
import 'babel-polyfill';

import Book from './Book';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hidden: 'true',
      id: ''
    };
    this.toggleClass = this.toggleClass.bind(this);
  }

  componentDidMount () {
    let blocks = document.getElementsByClassName('books'),
        state = this.state.hidden;

    for (let i = 0; i < blocks.length ; i++) {
      blocks[i].style.position = 'relative';
      let booki = document.getElementById('booki');
    }

    document.addEventListener('mousemove', function( event ) {
      let x = event.clientX,
          y = event.clientY,
          moveXfast = x/5,
          moveXslow = x/15,
          moveYfast = y/7,
          moveYslow = y/15,
          moveX = x/10,
          moveY = y/10,
          width = window.innerWidth,
          height = window.innerHeight

      // console.log(x);
      // console.log(y);

      book1.style.left = -moveXfast + 'px';
      book1.style.top  = -moveYfast + 'px'

      book2.style.left = -moveX + 'px';
      book2.style.top  = -moveY + 'px';

      book3.style.left = -moveXfast + 'px';
      book3.style.top  = -moveYfast + 'px';

      book4.style.left = -moveXfast + 'px';
      book4.style.top  = -moveY + 'px';

      book5.style.left = -moveX + 'px';
      book5.style.top  = -moveY + 'px';

      book6.style.left = -moveX + 'px';
      book6.style.top  = -moveY + 'px';

      book7.style.left = -moveX + 'px';
      book7.style.top  = -moveY + 'px';

      book8.style.left = -moveXslow + 'px';
      book8.style.top  = -moveYslow + 'px';

      }, false)

      document.addEventListener('click', function(e) {
        e = e || window.event;
        let target = e.target || e.srcElement;
        if (['0','1','2','3','4','5','6','7'].indexOf(target.id) > -1) {
          console.log(target.id)
          this.setState({
            id: target.id
          })
        } else {
          console.log('err')
        }
      }.bind(this));
  }

  toggleClass () {
    let hidden = document.getElementById('popup'),
        main = document.getElementById('main'),
        popup_state = this.state.hidden

    if (popup_state === 'true') {
      hidden.classList.add('active')
      hidden.classList.remove('hidden')
      main.classList.add('hidden_negative')
      main.classList.remove('active')
      this.setState({hidden: 'false'})
    } else {
      hidden.classList.add('hidden')
      hidden.classList.remove('active')
      main.classList.add('active')
      main.classList.remove('hidden_negative')
      this.setState({hidden: 'true'})
    }

  }

  render() {
    return (
      <div>
      <div id="main" className="slide active">
        <div className="main_text">
          <p>Русская литература</p>
        </div>
        <div id="page">
          <div className="blocks" id="blocks" onClick={this.toggleClass}>
            <div className="books" id="book1">
              <div className="book">
                <div className="inner">
                  <img id="0" src="http://animedia-company.cz/wp-content/uploads/2013/03/cover1-1024-350x466.jpg" alt=""/>
                </div>
              </div>
            </div>
            <div className="books" id="book2" onClick={this.toggleClass}>
              <div className="book">
                <div className="inner">
                  <img id="1" src="http://ptiburdukov.ru/pick/712-01.gif" alt=""/>
                </div>
              </div>
            </div>
            <div className="books" id="book3" onClick={this.toggleClass}>
              <div className="book">
                <div className="inner">
                  <img id="2" src="http://apk-knigi.ru/uploads/posts/2014-11/1414992588_master-i-margarita.jpg" alt=""/>
                </div>
              </div>
            </div>
            <div className="books" id="book4" onClick={this.toggleClass}>
              <div className="book">
                <div className="inner">
                  <img id="3" src="http://modernlib.ru/books/bulgakov_mihail_afanasevich/sobache_serdce/cover.jpg" alt=""/>
                </div>
              </div>
            </div>
            <div className="books" id="book5" onClick={this.toggleClass}>
              <div className="book">
                <div className="inner">
                  <img id="4" src="http://lozero.ru/image/0/63/6310.jpg" alt=""/>
                </div>
              </div>
            </div>
            <div className="books" id="book6" onClick={this.toggleClass}>
              <div className="book">
                <div className="inner">
                  <img id="5" src="http://knigatop.com/img_post/88172689153.jpg" alt=""/>
                </div>
              </div>
            </div>
            <div className="books" id="book7" onClick={this.toggleClass}>
              <div className="book">
                <div className="inner">
                  <img id="6" src="http://audioknigi.me/img/1/8842-derevnya.jpg" alt=""/>
                </div>
              </div>
            </div>
            <div className="books" id="book8" onClick={this.toggleClass}>
              <div className="book">
                <div className="inner">
                  <img id="7" src="https://i.livelib.ru/boocover/1000595913/o/b0ec/I._S._Turgenev__Asya.jpeg" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Book backButton={this.toggleClass} id={this.state.id} data={this.props.data}/>
    </div>
    );
  }
}
