const requests = {};

export const rateLimiter = (req, res, next) => {
  const ip = req.ip;
  const now = Date.now();

  if (!requests[ip]) {
    requests[ip] = { count: 1, start: now };
    return next();
  }

  const diff = now - requests[ip].start;

  if (diff < 60000) {
    if (requests[ip].count >= 15) {
      return res.status(429).json({
        error: "Too many requests, please try again later",
      });
    }
    requests[ip].count++;
    return next();
  }

  requests[ip] = { count: 1, start: now };
  next();
};
