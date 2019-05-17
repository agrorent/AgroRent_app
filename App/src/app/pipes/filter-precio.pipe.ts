import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPrecio'
})
export class FilterPrecioPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) return value;
    const resultPosts = [];
    for (const post of value) {
      if (post.precio.toString().indexOf(arg.toString()) > -1) {
        resultPosts.push(post);
      };
    };
    return resultPosts;
  }
}
