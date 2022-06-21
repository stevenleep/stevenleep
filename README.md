# My Code Snippets

## Less Example
```less
@viewport-height: 100vh;
@viewport-padding-top: 20px;
@viewport-padding-bottom: @viewport-padding-top;
@banner-viewport-height: 200px;

@global-box-sizing: border-box;

.utils(@viewport-height: 100%, @already-used-height:0px, @sum-padding: 0px) {
	@heightable: (@viewport-height - @already-used-height);
	@calc-heightable: (calc(@viewport-height - @already-used-height));
	@safe-content-height: calc(@viewport-height + @sum-padding);
}

.banner {
  height: @banner-viewport-height;
}

.content {
  height: .utils(@viewport-height, .banner[height])[@calc-heightable];
}

.content-2 when (@global-box-sizing = border-box) {
  height: .utils(@viewport-height, @sum-padding: @viewport-padding-bottom + @viewport-padding-top)[@safe-content-height];;
}
```