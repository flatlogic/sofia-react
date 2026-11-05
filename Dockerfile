FROM node:22-slim
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
# Preserve the existing React 18 / Router 5 peer metadata constraints.
RUN npm ci --legacy-peer-deps
COPY . .
ENV REACT_APP_BACKEND=true
EXPOSE 3000
CMD ["npm", "exec", "--", "vite", "--host", "0.0.0.0", "--port", "3000"]
