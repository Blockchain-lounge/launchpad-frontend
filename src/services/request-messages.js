import Moralis from "moralis";

const config = {
  domain: import.meta.env.VITE_APP_DOMAIN,
  statement: "Please sign this message to confirm your identity.",
  uri: import.meta.env.VITE_AUTH_URL,
  timeout: 60,
};

export default async function handler(req, res) {
  const { address, chain, network } = req.body;

  await Moralis.start({ apiKey: import.meta.env.VITE_MORALIS_API_KEY });

  try {
    const message = await Moralis.Auth.requestMessage({
      address,
      chain,
      network,
      ...config,
    });

    res.status(200).json(message);
  } catch (error) {
    res.status(400).json({ error });
    console.error(error);
  }
}

handler();
