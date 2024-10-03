import React from 'react';

const FAQ = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6" style={{ color: '#08D4B4' }}>
          Frequently Asked Questions!
        </h1>

        <p className="text-center mb-12">
          Use <kbd className="border px-1 py-0.5 text-sm">Ctrl + F</kbd> to search your query keyword on this page.
        </p>

        <div className="border-t-2 mb-8" style={{ borderColor: '#08D4B4' }}></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left text-gray-900">
          <ul className="space-y-4">
            <li>• Is it possible to earn from Cypher Forum?</li>
            <li>• What is the best thing to do before creating a topic?</li>
            <li>• What kind of content is not allowed for posting?</li>
            <li>• What kind of “help” queries are not allowed?</li>
            <li>• Does requesting Bins/Cookies/Generators/Cards/Cracks/Serial Keys allowed?</li>
            <li>• Does requesting for coupons or updated links allowed?</li>
          </ul>

          <ul className="space-y-4">
            <li>• What if coupon(s) giveaway gets expired, should I ask via post/reply?</li>
            <li>• Why does my topic need approval?</li>
            <li>• Is it allowed to post coupons in give-away and freebies category?</li>
            <li>• Is it allowed to post paid/discounted coupon(s)/discount deals?</li>
            <li>• Why was my posted coupon(s) or topic rejected?</li>
            <li>• Is it ok to post something with a torrent downloadable link or magnet URI?</li>
          </ul>

          <ul className="space-y-4">
            <li>• How can I change my username?</li>
            <li>• Why am I unable to create any topic or reply to any topic?</li>
            <li>• How do I delete my account or my created topic?</li>
            <li>• Can I use an animated .GIF image as my profile picture?</li>
            <li>• What happened to the previous forum & content?</li>
            <li>• Forum guidelines</li>
          </ul>
        </div>

        <div className="border-t-2 mt-8" style={{ borderColor: '#08D4B4' }}></div>
      </div>
    </div>
  );
};

export default FAQ;
