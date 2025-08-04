'use client'

import { useState, Suspense } from 'react'
import dynamic from 'next/dynamic'
import LandingPage from "./landing/page";

export default function Home() {
  return <LandingPage />;
}
