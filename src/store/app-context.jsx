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
});

export const AppProvider = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setBlogs(blogsData);
    setUsers(usersData);
  }, []);

  const getBlogs = (category) =>
    blogs.filter((blog) => blog.category === category);

  const getTopBlogs = (category = 'any') =>
    category === 'any'
      ? blogs.sort((a, b) => +b.likes - +a.likes).slice(0, 4)
      : blogs
          .filter((blog) => blog.category === category)
          .sort((a, b) => +b.likes - +a.likes)
          .slice(0, 4);

  const getLatestBlogs = () =>
    blogs
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);

  const getSecondaryLatestBlogs = () =>
    blogs
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(3, 7);

  const getBlog = (id) => blogs.find((blog) => blog.id === id);

  const getUser = (id) => users.find((user) => user.id === id);

  const getRelatedBlogs = (authorid, blogid) =>
    blogs
      .filter((blog) => blog.author === authorid && blog.id !== blogid)
      .sort(() => {
        if (Math.random() > 0.5) return 1;
        return -1;
      })
      .slice(0, 3);

  const getPrimaryGalleryBlogs = () =>
    blogs
      .filter((blog) => blog.badges.includes('gallery'))
      .sort((a, b) => +b.likes - +a.likes)
      .slice(0, 3);

  const getSecondaryGalleryBlog = () =>
    blogs
      .filter((blog) => blog.badges.includes('gallery'))
      .sort((a, b) => +b.likes - +a.likes)[3];

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
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
