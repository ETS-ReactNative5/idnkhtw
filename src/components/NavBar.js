import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  const {
    user,
    onLogout,
    onShowLoginForm,
    onShowSignUpForm
  } = props;

  return (
    <nav className='navbar'>
      <div className='dropdown'>
        <div
          id='palabras-dropdown1'
          className='dropdown1'
        >
          <Link
            to={ '/' }
            className='btn btn-default'
          >
            Words
          </Link>
          <div
            id='palabras-content1'
            className='content'>
            <Link
              to={ '/words/find-palabra' }
              className='btn btn-default'
            >
              Find Word
            </Link>
            <Link
              to={{
                pathname: '/games/four-letter-word',
                hash: '#fourLetterWords',
                state: { p: 'fourLetterWords/' }
              }}
              onClick={ null }
              className='btn btn-default'
            >
              Cows & Bulls
            </Link>
            <Link
              to={{
                pathname: '/blog',
                hash: '#blog',
                state: { p: 'blog/' }
              }}
              className='btn btn-default'
            >
              Blog
            </Link>
          </div>
        </div>
        <div
          id='palabras-dropdown2'
          className='dropdown1'>
          <Link
            to={ '/' }
            className='btn btn-default'
          >
            Word Lists
          </Link>
          <div
            id='palabras-content2'
            className='content'>
          <Link
            to={{
              pathname: '/words/four-letter-word',
              hash: '#fourLetterWords',
              state: { p: 'fourLetterWords/' }
            }}
            className='btn btn-default'
          >
            Four Letter Word
          </Link>
          <Link
            to={{
              pathname: '/words/prefix-suffix-root',
              hash: '#prefixSuffixRoots',
              state: { p: 'prefixSuffixRoots/' }
            }}
            className='btn btn-default'
          >
            Prefix Suffix Root
          </Link>
          <Link
            to={{
              pathname: '/words/verbo',
              hash: '#verbos',
              state: { p: 'verbos/' }
            }}
            className='btn btn-default'
          >
            Verbo
          </Link>
          </div>
        </div>
        <div className=''>
          { user.token ?
            <ul
              className=''>
              <li><button className=''>{ user.username }</button></li>
              <li><button className=''><img src={ user.profileImageUrl } alt='user' /></button></li>
              <li onClick={ onLogout }><button className=''>Log out</button></li>
            </ul> :
            <ul className=''>
              <li><button onClick={ onShowSignUpForm } className=''>Sign up</button></li>
              <li><button onClick={ onShowLoginForm }>Sign in</button></li>
            </ul>
          }
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
