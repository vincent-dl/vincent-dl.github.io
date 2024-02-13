import React from "react";

function News() {
  return (
    <div className="mb-5 mt-16">
      <h1 className="font-bold text-2xl text-red-500">News</h1>
      <ul>
        {/* <li>
          [Jan 2024] Our paper on Realtime holographic telepresence got accepted
          for publication at Mobisys 2024. I'll be travelling to Japan this
          June!
        </li> */}
        <li>
          [Feb 2024] I started my new role as a gradudate research assistant at
          UMass Amherst!
        </li>
        <li>
          [Jan 2024] I got multiple offers for my PhD application in Computer
          Science from US universities! Many thanks to my mentors, collaborators
          and friends for your valueless supports!
        </li>
        <li>
          [Oct 2023] Our paper on face identification got accepted for
          publication at IEEE WACV 2023!
        </li>
        <li>[June 2022] I graduated from college!</li>
      </ul>
    </div>
  );
}

export default News;
