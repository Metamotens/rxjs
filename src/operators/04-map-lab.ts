import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const text = document.createElement("div");

text.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus nisl sed sagittis sagittis. Donec ultricies eros vitae ante pellentesque, et malesuada erat molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis vitae nibh ac sem tempus convallis. Aenean ac quam est. Duis id nisl sit amet dui cursus faucibus ut quis ex. Nulla dignissim mattis quam elementum ornare. Vestibulum tristique mi non nunc faucibus vulputate. Curabitur auctor posuere ante, tristique luctus tellus ultrices vitae. Vivamus tincidunt nibh eget massa suscipit, eget efficitur erat aliquam. Curabitur gravida odio id velit porttitor, eget porta lorem mollis. Sed mattis enim sit amet arcu viverra condimentum. Morbi aliquet odio sed ipsum iaculis consectetur. Proin venenatis sem sed finibus imperdiet.
<br><br>
Ut in ex suscipit, cursus eros ac, iaculis dui. Donec feugiat faucibus ornare. Fusce dapibus, dolor nec vehicula porta, magna metus scelerisque velit, ut dapibus metus nisi id risus. Aliquam erat volutpat. Donec sem augue, molestie id ligula at, molestie viverra massa. Donec egestas vitae est eget ultricies. Vivamus turpis ante, gravida non hendrerit sed, iaculis non diam. Donec id nisl non mauris luctus fringilla. Nulla luctus metus eu dui maximus, viverra auctor ante bibendum. Sed eleifend urna a lacus egestas volutpat. Etiam eleifend, eros ut sagittis malesuada, erat neque facilisis quam, ac aliquet lectus ligula ac eros. Vestibulum iaculis arcu a pulvinar venenatis. Integer sed odio vitae erat sagittis egestas quis sed lacus. Donec rhoncus venenatis nisl, a tincidunt velit sollicitudin non. Mauris ipsum justo, faucibus ac odio nec, dictum dignissim felis.
<br><br>
In aliquet ipsum non purus ullamcorper luctus. Quisque volutpat justo sapien, sit amet vehicula lectus pretium cursus. Sed mollis nisi nec ipsum ultrices, sed sollicitudin purus eleifend. Maecenas eget lacus in augue ornare egestas. Curabitur non mauris quis libero blandit tincidunt at in lectus. Mauris convallis venenatis nibh in efficitur. Integer euismod placerat est eu dignissim. Quisque eleifend, sapien at laoreet ornare, lectus enim elementum felis, et ornare dolor risus nec ex. Praesent a vulputate nunc, ac luctus libero. Vivamus vel pharetra risus. Aenean condimentum volutpat odio sit amet dapibus. Donec nisi velit, rutrum ut sagittis ut, varius et massa. Vivamus dapibus dignissim ex, sit amet efficitur massa gravida quis.
<br><br>
Nulla facilisi. Vestibulum vitae dui consectetur, vulputate risus eget, condimentum risus. Sed aliquet volutpat neque, in volutpat lacus aliquet in. Vivamus vulputate efficitur turpis non facilisis. Cras blandit orci vitae ullamcorper porta. Nulla eu ullamcorper ex, id euismod nisl. Nunc mi lacus, sollicitudin nec sagittis eu, tempus eu augue.
<br><br>
Nulla lacinia mattis orci a efficitur. Mauris non metus purus. Nullam ac velit vitae eros dignissim tempor. Phasellus dapibus lacus pulvinar erat convallis semper. Cras eget lectus eget nulla interdum egestas. Aliquam pharetra bibendum vehicula. Nam vitae erat in dui accumsan ullamcorper et congue eros. Nunc vel dolor id nisl gravida eleifend sit amet eu lectus. Ut vel fringilla mi. Suspendisse potenti. Donec non eros at enim feugiat sollicitudin id eget diam. Duis aliquam porttitor augue, vel faucibus velit gravida nec. Proin nec vulputate turpis, vitae egestas purus. Duis quis nulla lobortis, tincidunt magna a, suscipit erat. Integer et lectus vel arcu porttitor porttitor sit amet vitae ante.`;

const body = document.querySelector("body");
body.append(text);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body.append(progressBar);

const calculateScroll = (event) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

const scroll$ = fromEvent(document, "scroll").pipe(
  map(calculateScroll),
  tap(console.log)
);

scroll$.subscribe((scroll) => {
  progressBar.style.width = `${scroll}%`;
});
