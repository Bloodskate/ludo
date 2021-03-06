import React, { Component } from 'react';
import { connect } from 'react-redux';

import { initGame } from '../../actions';

import SquareRow from '../square-row/square-row';
import Token from '../token/token';
import Dice from '../dice/dice';

import styles from './board.css';

class Board extends Component {

  componentWillMount() {
    this.props.initGame();
  }

  renderRows() {
    return (
      this.props.board.map((row, index) => {
        return (
          <SquareRow row={row} key={index} />
        )
      })
    )
  }

  renderTokens() {
    return (
      this.props.tokens.map((token) => {
        return (
          <Token token={token} key={token.id} />
        )
      })
    )
  }

  renderLoading() {
    return (
      <div>
        Loading...
      </div>
    )
  }

  render() {
    return (
      <div className={styles.main}>
        <div className={styles.board}>
          {
            !this.props.board || !this.props.tokens ? this.renderLoading() :
            <div>
              <div>
                {
                  this.renderRows()
                }
              </div>
              <div>
                {
                  this.renderTokens()
                }
              </div>
            </div>
          }
        </div>
        <div className={styles.sidebar}>
          <Dice />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {
    board: state.board,
    tokens: state.tokens
  }
}

export default connect(mapStateToProps, { initGame })(Board);