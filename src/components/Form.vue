<template>
  <form class="p-form p-form--inline">
    <div class="p-form__group">
      <label for="full-name-inline" class="p-form__label">Title</label>
      <div class="p-form__control u-clearfix">
        <input type="text" id="full-name-inline" required="">
      </div>
    </div>
    <div class="p-form__group">
      <label for="full-name-inline" class="p-form__label">Tagline</label>
      <div class="p-form__control u-clearfix">
        <input type="text" id="full-name-inline" required="">
      </div>
    </div>
    <div class="p-form__group">
      <label for="full-name-inline" class="p-form__label">Runtime</label>
      <div class="p-form__control u-clearfix">
        <input type="text" id="full-name-inline" required="">
      </div>
    </div>
    <div class="p-form__group">
      <label for="full-name-inline" class="p-form__label">Release Date</label>
      <div class="p-form__control u-clearfix">
        <input type="text" id="full-name-inline" required="">
      </div>
    </div>
    <div class="p-form__group p-form-validation is-error">
      <label for="address-inline1" class="p-form__label">Rating</label>
      <div class="p-form__control u-clearfix">
        <input type="text" id="address-inline1" class="p-form-validation__input" required="" aria-invalid="true" aria-describedby="input-error-message-inline">
        <p class="p-form-validation__message" id="input-error-message-inline" role="alert">
          <strong>Error:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </div>
    <button class="p-button--positive">Add Record</button>
  </form>
</template>

<script>
export default {
  name: 'Form',
};
</script>

<style lang="scss" scoped>
</style>
