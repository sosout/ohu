import gulp from 'gulp';
import chalk from 'chalk';
import config from '../config';
import '../tasks';

process.env.NODE_ENV = 'production'

gulp.on('error', e => console.log('error', e));

export default function() {
  gulp.task('build')((err) => {
    console.log('Build task has been completed');

    console.log();
    console.log(`Please checkout to ${chalk.cyan('publish/' + config.target.tsconfig.module)} branch, and publish it`);
  });
}