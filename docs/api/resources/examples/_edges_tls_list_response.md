<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Response
```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": null,
      "created_at": "2025-04-16T10:07:31Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_2vo4NMYH8jdt19BMrzuPpbm3mPm",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2vo4NMYH8jdt19BMrzuPpbm3mPm"
    },
    {
      "backend": {
        "backend": {
          "id": "bkdhr_2vo4M6i82qhSzuoNeRIy9kNedr5",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_2vo4M6i82qhSzuoNeRIy9kNedr5"
        },
        "enabled": true
      },
      "created_at": "2025-04-16T10:07:21Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_2vo4M2TPrMOX0LCZnlyBkzXH6y7",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2vo4M2TPrMOX0LCZnlyBkzXH6y7"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
