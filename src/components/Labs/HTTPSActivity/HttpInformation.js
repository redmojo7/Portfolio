import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function HttpInformation({ url, headers, requestBody }) {
  return (
    <Container className="mt-4 text-start">
      {url && requestBody && (
        <div>
          <div>
            <h4 className="purple">URL</h4>
            <p className="text-light">{url}</p>
          </div>
          <div>
            <h4 className="purple">Headers</h4>
            {Object.keys(headers).map((key) => (
              <div key={key}>
                <p className="text-light">
                  <strong>{key}:</strong> {headers[key]}
                </p>
              </div>
            ))}
          </div>
          <div>
            <h4 className="purple">Request Body</h4>
            <textarea className="bg-transparent text-light" readOnly value={requestBody} style={{ width: "100%" }} />
          </div>
        </div>
      )}
    </Container>
  );
}

export default HttpInformation;
