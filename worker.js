// Worker Cloudflare — Farghan Digital Marketing (situs statis)
// Hanya menyajikan file statis. Auth OAuth ditangani oleh endpoint bersama
// (cms-demo.lokersprasan.workers.dev) — lihat config.yml.

export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
