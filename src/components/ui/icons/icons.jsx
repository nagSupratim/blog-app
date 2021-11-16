import React from 'react';
import { ImFacebook, ImTwitter, ImInstagram, ImYoutube } from 'react-icons/im';
import { BsHandThumbsUp, BsShare } from 'react-icons/bs';

const iconStyleD = {
  color: 'white',
  backgroundColor: 'rgb(212, 212, 212)',
  padding: '4px',
  fontSize: '1.4rem',
  borderRadius: '5px',
};

const iconStyleL = {
  color: 'rgb(182, 182, 182)',
  fontSize: '1.8rem',
};

export const FaceBookIcon = () => {
  return <ImFacebook style={iconStyleD}></ImFacebook>;
};

export const TwitterIcon = () => {
  return <ImTwitter style={iconStyleD}></ImTwitter>;
};

export const InstagramIcon = () => {
  return <ImInstagram style={iconStyleD}></ImInstagram>;
};

export const YoutubeIcon = () => {
  return <ImYoutube style={iconStyleD}></ImYoutube>;
};

export const LikeIcon = () => {
  return <BsHandThumbsUp style={iconStyleL}></BsHandThumbsUp>;
};

export const ShareIcon = () => {
  return <BsShare style={iconStyleL}></BsShare>;
};
