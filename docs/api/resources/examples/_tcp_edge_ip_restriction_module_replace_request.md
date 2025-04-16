<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Request
```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"ip_policy_ids":["ipp_2vo4NWYafa6TP51xz65s5QTHyoT"]}' \
https://api.ngrok.com/edges/tcp/edgtcp_2vo4NSUK99CiEtmFXP3H67GEuPS/ip_restriction
