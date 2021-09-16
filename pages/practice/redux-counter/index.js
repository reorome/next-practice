import React from 'react';
import { Counter } from '@/features/counter/Counter';
import Layout from '/components/layout';

export default function reduxCounter() {
  return (
    <Layout>
      <Counter></Counter>
    </Layout>
  );
}
