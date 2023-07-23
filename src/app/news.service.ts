import { Injectable } from '@angular/core';
import { News } from './home-page/homebody/news/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  get news(): Array<News> {
    return [
    { "id": 1, "date": `2023-07-05 11:11`, "warning": `您目前有22張簽核單須簽核`, "link": `請點選進入`},
    { "id": 2, "date": `2023-07-03 09:32`, "warning": `您目前有14張簽核單須簽核`, "link": `請點選進入`},
    { "id": 3, "date": `2023-06-30 16:29`, "warning": `您目前有6張簽核單須簽核`, "link": `請點選進入`},
    { "id": 4, "date": `2023-06-25 13:47`, "warning": `您有衛材申請待審核`, "link": ``}
  ]}

  get unFinishNews(): Array<News> {
    return [
    { "id": 1, "date": `2023-07-05 11:11`, "warning": `您目前有22張簽核單須簽核`, "link": `請點選進入`},
    { "id": 2, "date": `2023-07-03 09:32`, "warning": `您目前有14張簽核單須簽核`, "link": `請點選進入`},
    { "id": 3, "date": `2023-06-30 16:29`, "warning": `您目前有6張簽核單須簽核`, "link": `請點選進入`}
  ]}

  get normalNews(): Array<News> {
    return [
    { "id": 1, "date": `2023-06-25 13:47`, "warning": `您有衛材申請待審核`, "link": ``},
    { "id": 2, "date": `2023-06-15 16:42`, "warning": `您有衛材申請待審核`, "link": ``}
  ]}

  get finishNews(): Array<News> {
    return [
    { "id": 1, "date": `2023-07-05 11:11`, "warning": `您目前有22張簽核單須簽核`, "link": `請點選進入`},
    { "id": 2, "date": `2023-07-03 09:32`, "warning": `您目前有14張簽核單須簽核`, "link": `請點選進入`},
    { "id": 3, "date": `2023-06-30 16:29`, "warning": `您目前有6張簽核單須簽核`, "link": `請點選進入`},
    { "id": 4, "date": `2023-06-25 16:42`, "warning": `您有衛材申請待審核`, "link": ``},
    { "id": 5, "date": `2023-07-03 09:32`, "warning": `您目前有14張簽核單須簽核`, "link": `請點選進入`},
    { "id": 6, "date": `2023-06-30 16:29`, "warning": `您目前有6張簽核單須簽核`, "link": `請點選進入`},
    { "id": 7, "date": `2023-06-15 16:42`, "warning": `您有衛材申請待審核`, "link": ``}
  ]}
}
