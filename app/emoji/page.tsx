"use client"
import dynamic from 'next/dynamic';

const EmojiPicker = dynamic(() => import('./emoji'), { ssr: false });

export default function Page() {
   
  return (
    <div>
<EmojiPicker/>
    </div>
  );
}
