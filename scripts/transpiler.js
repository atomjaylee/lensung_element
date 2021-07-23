const path = require('path');
const { task, src, dest, series, watch } = require('gulp');
const less = require('gulp-less');
const rename = require('gulp-rename');
const babel = require('gulp-babel');

const isProduct = process.env.NODE_ENV === 'product';

const dist = isProduct
  ? path.join(__dirname, '../components')
  : path.join(__dirname, '../examples/components');
const components = path.join(__dirname, '../packages');

const exTypes = ['ts', 'less', 'json', 'axml', 'sjs'];

// -------------------- 任务单元 --------------------
task('less', () =>
  src(`${components}/**/*.less`)
    .pipe(less())
    .on('error', (e) => console.error(e))
    .pipe(rename({ extname: '.acss' }))
    .pipe(dest(dist))
);

task('ts', () =>
  src(`${components}/**/*.ts`)
    .pipe(babel())
    .on('error', (e) => console.error(e))
    .pipe(dest(dist))
);

task('json', () => src(`${components}/**/*.json`).pipe(dest(dist)));
task('axml', () => src(`${components}/**/*.axml`).pipe(dest(dist)));
task('sjs', () => src(`${components}/**/*.sjs`).pipe(dest(dist)));

// -------------------- 监听任务 --------------------
const build = series(...exTypes);
build();

if (isProduct === false) {
  exTypes.forEach((type) => {
    const watcher = watch(`${components}/**/*${type}`, series(type));
    watcher.on('change', (evt) => console.log(`File ${evt} was changed`));
    watcher.on('add', (evt) => console.log(`File ${evt} was added`));
    watcher.on('unlink', (evt) => console.log(`File ${evt} was removed`));
  });
}
