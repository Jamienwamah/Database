const joinNewsletter = async (email: string) => {
  const response = await fetch(`${process.env.BASE_URL}/newsletter`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (response.ok) {
    alert("Subscribed successfully!");
  } else {
    alert("Failed to subscribe.");
  }
};

export default joinNewsletter;
