'use client';

import { Icon } from '@iconify/react';
import { Button } from "./Button";

export function SignIn() {
  return (
    <div className="bg-app-gray p-20 bg-opacity-5">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center bg-[#32DF8F] bg-opacity-10 p-16 rounded-2xl">
          <div className="text-4xl text-[#5E6282] w-[960px] mb-16">
            <strong className="font-semibold">
              Subscribe to get information, latest news and other
              interesting offers about Cobham
            </strong>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative">
              <Icon
                icon="mdi:email"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="email"
                className="w-96 rounded-xl p-3 pl-10"
                placeholder="Your email"
              />
            </div>
            <div>
              <Button variant="primary" style="border-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
