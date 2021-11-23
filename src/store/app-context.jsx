import React, { useEffect, useState } from 'react';
import blogsData from './data/blogs.json';
import usersData from './data/users.json';

const AppContext = React.createContext({
  blogs: [],
  users: [],
  getBlogs: (category) => {},
  getTopBlogs: (category) => {},
  getBlog: (id) => {},
  getUser: (id) => {},
  getRelatedBlogs: (authorid, blogid) => {},
  getLatestBlogs: () => {},
  getSecondaryLatestBlogs: () => {},
  getPrimaryGalleryBlogs: () => {},
  getSecondaryGalleryBlog: () => {},
  toggleLike: (id, set) => {},
});

export const AppProvider = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setBlogs(blogsData);
    setUsers(usersData);
  }, []);

  const getBlogs = (category) => {
    return blogs.filter((blog) => blog.category === category);
  };
  const getTopBlogs = (category = 'any') => {
    return category === 'any'
      ? blogs.sort((a, b) => +b.likes - +a.likes).slice(0, 4)
      : blogs
          .filter((blog) => blog.category === category)
          .sort((a, b) => +b.likes - +a.likes)
          .slice(0, 4);
  };

  const getLatestBlogs = () => {
    return blogs
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  };

  const getSecondaryLatestBlogs = () => {
    return blogs
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(3, 7);
  };

  const getBlog = (id) => {
    return blogs.find((blog) => blog.id === id);
  };

  const getUser = (id) => {
    return users.find((user) => user.id === id);
  };

  const getRelatedBlogs = (authorid, blogid) => {
    return blogs
      .filter((blog) => blog.author === authorid && blog.id !== blogid)
      .sort(() => {
        if (Math.random() > 0.5) return 1;
        return -1;
      })
      .slice(0, 3);
  };

  const getPrimaryGalleryBlogs = () => {
    return blogs
      .filter((blog) => blog.badges.includes('gallery'))
      .sort((a, b) => +b.likes - +a.likes)
      .slice(0, 3);
  };

  const getSecondaryGalleryBlog = () => {
    return blogs
      .filter((blog) => blog.badges.includes('gallery'))
      .sort((a, b) => +b.likes - +a.likes)[3];
  };

  const toggleLike = (blogId, set = true) => {
    const data = [...blogs];
    const index = data.findIndex((b) => b.id === blogId);
    const f = set ? 1 : -1;
    data[index].likes = +data[index].likes + f;
    setBlogs(data);
  };

  return (
    <AppContext.Provider
      value={{
        blogs: blogs,
        user: [],
        getBlogs: getBlogs,
        getTopBlogs: getTopBlogs,
        getBlog: getBlog,
        getUser: getUser,
        getRelatedBlogs: getRelatedBlogs,
        getLatestBlogs: getLatestBlogs,
        getSecondaryLatestBlogs: getSecondaryLatestBlogs,
        getPrimaryGalleryBlogs: getPrimaryGalleryBlogs,
        getSecondaryGalleryBlog: getSecondaryGalleryBlog,
        toggleLike: toggleLike,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
