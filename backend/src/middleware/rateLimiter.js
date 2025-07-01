import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("my-limit-key");

    if (!success) {
      return res
        .status(429)
        .json({ message: "Too many requests, please try again later." });
    }

    next(); // Call the next middleware or route handler if the request is allowed
  } catch (error) {
    console.log("Rate limit error:", error);
    next(error); // Pass the error to the next middleware for handling
  }
};

export default rateLimiter;
