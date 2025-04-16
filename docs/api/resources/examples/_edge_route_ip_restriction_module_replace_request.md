<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Request
```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"ip_policy_ids":["ipp_2vo4N6BfcNPd3Y3n0GOEjwIADYH","ipp_2vo4N9YZDrnxiYa67dJ7kfDk7HF"]}' \
https://api.ngrok.com/edges/https/edghts_2vo4N6TRmzUR1ybY8TWKbv6kQCo/routes/edghtsrt_2vo4N32lfJy9VvzypQ0wExyOEef/ip_restriction
