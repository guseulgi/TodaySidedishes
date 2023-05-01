import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { fetchData } from '../utils/types';
import FoodList from '../components/FoodList';

export default function Main() {

  return (
    <>
      <FoodList />
    </>
  )
}
