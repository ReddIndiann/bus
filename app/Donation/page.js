import React from 'react';
import ".././globals.css";
import Link from 'next/link';

export default function Home() {
  return (
    <section className="w-full flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl bg-black text-white shadow-lg rounded-lg overflow-hidden p-6 mx-auto">
        <h2 className="text-3xl font-bold mb-4">Checkout Information</h2>
        <p className="mb-4">
          Buzzstopboys is a Non-Governmental Organisation dedicated to keeping the country clean.
        </p>
        <p className="mb-4">Personal Detail</p>
        <p className="mb-4 text-sm text-gray-400">
          Empower young boys to reach their full potential through your generous donation to BuzzStopBoys.org.
        </p>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="purpose" className="block text-sm font-bold mb-2">
              Purpose For Transaction
            </label>
            <select
              id="purpose"
              className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            >
              <option>Select</option>
              <option>Donation</option>
              <option>Purchase</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-bold mb-2">
              Enter Amount
            </label>
            <input
              type="text"
              id="amount"
              placeholder="GHC"
              className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <p className="mb-4">You can select an amount to continue...</p>
          <div className="flex flex-wrap gap-10 mb-4">
            <button type="button" className="w-1/5 px-4 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring focus:border-blue-300">
               5.00
            </button>
            <button type="button" className="w-1/5  px-4 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring focus:border-blue-300">
              10.00
            </button>
            <button type="button" className="w-1/5  px-4 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring focus:border-blue-300">
              50.00
            </button>
            <button type="button" className="w-1/5  px-4 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring focus:border-blue-300">
              100.00
            </button>
            <button type="button" className="w-1/5  px-4 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring focus:border-blue-300">
              500.00
            </button>
            <button type="button" className="w-1/5  px-4 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring focus:border-blue-300">
              1000.00
            </button>
            <button type="button" className="w-1/5  px-4 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring focus:border-blue-300">
             5000.00
            </button>
            <button type="button" className="w-1/5  px-4 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring focus:border-blue-300">
              10000.00
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-black font-bold py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Donate
          </button>
        </form>
        <p className="mt-4 text-gray-500 text-center">Powered By Wigal</p>
      </div>
    </section>
  );
}
