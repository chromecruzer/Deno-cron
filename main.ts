import axios from "npm:axios@1.3.4";
import HttpsProxyAgent from "npm:https-proxy-agent@5.0.1";

// List of proxies from the free proxy list
const proxies = [
  'http://189.240.60.164:9090',
  'http://50.175.212.76:80',
  'http://50.144.166.226:80',
  'http://50.231.104.58:80',
  'http://50.172.75.123:80',
  'http://50.223.246.226:80',
  // 'http://85.8.68.2:80',
  // 'http://50.174.145.10:80',
  // 'http://50.223.239.161:80',
  // 'http://50.175.212.77:80',
  // 'http://50.172.75.127:80',
  // 'http://50.145.24.176:80',
  // 'http://50.232.104.86:80',
  // 'http://50.218.57.70:80',
  // 'http://167.102.133.105:80',
  // 'http://50.231.172.74:80',
  // 'http://172.245.12.55:34567',
  // 'http://50.172.75.124:80',
  
  
];

// List of URLs to check
const urlsToCheck = [
  // 'https://jnj-scam.onrender.com/',
  // 'https://susmitha-maria.onrender.com/',
  // 'https://global-chat-zl7b.onrender.com/',
 // 'https://prachitha-saravanan.onrender.com',
//  'https://ezhil-bbco.onrender.com',
  // 'https://madhav-portfolio-q4tn.onrender.com/',
 // 'https://uniqueforce-graphql-demo.onrender.com',
//  'https://chatapp-8dgp.onrender.com/',
  'https://sudhalakshmi-task-management.onrender.com',
  'https://prachitha-saravanan-r9w6.onrender.com/',  //
 // 'https://startchat-chat-app.onrender.com/', 
  'https://abirami-portfolio.onrender.com',  //
  // 'https://rust-httpserver.onrender.com',
  // 'https://bun-httpserver.onrender.com',
  //'http://mythili.uniqueforce.in/',
   'https://susportfolio.netlify.app/', // for the sush bitch
  // 'https://youtubeclonesus.netlify.app/',
  // 'https://astonishing-fairy-84fd34.netlify.app/',
  // 'https://imagesearchappsus.netlify.app/',
  // 'https://66aa91d6edad7d3c43526e73--melodious-gnome-f9e9cc.netlify.app/',
  // 'https://jocular-blancmange-904044.netlify.app/',
 // 'https://tinyurl.com/Friday2001/'
  'https://reposerviise.onrender.com/',
 // 'https://uniqueforce-api.onrender.com/healthz'
  
];

// Function to check the status of a single URL using proxies
async function checkStatusWithProxies(url: string) {
  for (const proxy of proxies) {
    const agent = new HttpsProxyAgent(proxy);

    try {
      const response = await axios.get(url, { httpsAgent: agent });
      console.log(`Status from ${proxy} for ${url}:`, response.status);
    } catch (error) {
      console.log(`Error from ${proxy} for ${url}:`, error.message);
    }
  }
}

// Function to check the status of multiple URLs
async function checkMultipleUrls(urls: string[]) {
  for (const url of urls) {
    console.log(`Checking status for ${url}...`);
    await checkStatusWithProxies(url);
  }
}

// Schedule the task to run every 15 minutes
Deno.cron("Check Site Status", "*/15 * * * *", () => {
  console.log('Checking site statuses...');
  checkMultipleUrls(urlsToCheck);
});
