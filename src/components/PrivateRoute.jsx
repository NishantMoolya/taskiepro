import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getUserProfile } from '../redux/api/userApi';
import Spinner from './Spinner';

const PrivateRoute = () => {
    const isLoading = useSelector(state => state.user.isLoading);
    const userDispatch = useDispatch();

    useEffect(() => {
        userDispatch(getUserProfile());
        console.log("runned");
    }, []);

  return (
   <>{!isLoading ? <Outlet /> : <Spinner />}</>
  )
}

export default PrivateRoute