import React from 'react';

export default class Book extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let d = React.DOM,
        bookNodes = this.props.data,
        template,
        id = this.props.id

    for (var i = 0; i < bookNodes.length; i++) {
      if (['0','1','2','3','4','5','6','7'].indexOf(id) > -1) {
        template = (
          <div className="book_popup">
            <div onClick={this.props.backButton} className="back_button"> Назад </div>
            <img className="untouchable" src={bookNodes[id].img} />
            <div className="name">
              {bookNodes[id].name}
            </div>
            <div className="about">
              {bookNodes[id].about}
            </div>
          </div>
        )
      } else {
        template = (
          <div className="book_popup">
            <div onClick={this.props.backButton} className="back_button"> Назад </div>
            <div className="logo">
              <p id="error"><span>4</span>0<span>4</span></p>
            </div>
          </div>
          )
      }
    }
    return (
      <div id="popup" className="popup hidden">
        {template}
      </div>
    );
  }
}
