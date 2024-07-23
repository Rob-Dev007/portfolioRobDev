// convert-images.js
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

(async () => {
  await imagemin(['public/assets/*.{jpg,png,gif}'], {
    destination: 'public/assets/webp',
    plugins: [
      imageminWebp({ quality: 50 })
    ]
  });

  console.log('Images converted to WebP!');
})();