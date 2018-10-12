import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 100,
  rps: 3000,
  duration: "600s"
};

export default function() {
  // for (var i = 1; i < 4; i++) {
  //   let res = http.get(`http://18.222.194.219:3002/artist/${id}/relatedArtists`);
  // }
  // let id = Math.floor(Math.random() * 1000000) + 9000000;
  // let res = http.get(`http://localhost:3002/artist/${id}/relatedArtists`);
  // let res = http.get(`http://18.222.194.219:3002/artist/${id}/relatedArtists`);
  // let res = http.get("http://18.188.217.46:3000");
  // check(res, {
  //   "status was 200": (r) => r.status == 200,
  //   "transaction time OK": (r) => r.timings.duration < 1000
  // })
// };

  for (let i = 1; i < 4; i += 1) {
    const res = http.get(`http://18.188.217.46:3000/artist/${i * 5 + 2000000}/relatedArtists`, {
  });

   check(res, {
     'status was 200': r => r.status === 200,
     'server under load threshold': r => r.status !== 503,
     'transaction time OK': r => r.timings.duration < 800,
   });
 }
 const url = `http://18.188.217.46:3000/artist/${Math.floor(Math.random() * 9999999) + 1}/relatedArtists`;
 const res = http.get(url, { tags: { name: 'get-artists-info' } });
 check(res, {
   'status was 200': r => r.status === 200,
   'server under load threshold': r => r.status !== 503,
 });
}
