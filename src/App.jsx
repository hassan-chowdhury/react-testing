import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './components/header/Header';
import Headline from './components/headline/Headline';
import ListItem from './components/listItem/ListItem';
import SharedButton from './components/button/Button';
import { fetchPosts } from './actions';
import './styles.scss';


const App = ({
  aFetchPosts,
  posts,
}) => {
  const fetch = () => {
    aFetchPosts();
  };

  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to render posts!" />
        <SharedButton buttonText="Get posts" emitEvent={fetch} />
        {posts.length > 0
          && (
            <div>
              {posts.map((post) => {
                const { body, title, id } = post;
                return <ListItem key={id} title={title} desc={body} />;
              })}
            </div>
          )}
      </section>
    </div>
  );
};

const propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string,
      id: PropTypes.number,
      title: PropTypes.string,
      userId: PropTypes.number,
    })
  ),
  aFetchPosts: PropTypes.func,
};

App.propTypes = propTypes;

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(
  mapStateToProps,
  { aFetchPosts: fetchPosts },
)(App);
