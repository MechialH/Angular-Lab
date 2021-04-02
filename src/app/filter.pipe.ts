import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tasks, searchText: string | null) {
    if (!searchText){
      return tasks
    }
    return tasks.filter((task) => task.task.includes(searchText) )       
  }

}
