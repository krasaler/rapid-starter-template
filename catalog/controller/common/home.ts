import {
  GET,
  Controller,
  POST,
} from "rapid";
export class ControllerCommonHome extends Controller {
  @GET("/home")
  public async home() {
    await this.$context.config.load('default')
    this.$context.language.load('common/home')
    const {hash, salt} = this.$context.crypto.getHashPassword('1233456')
    this.$context.response.setOutput({ "home": this.$context.language.get('text_title'), "config":  this.$context.config.get('testConfig'), hash, salt });
  }
  @GET("/mail-test")
  public async mailtest() {
    this.$context.mail.setFrom('email@email.com')
    this.$context.mail.setTo('email@email.com')
    this.$context.mail.setSubject('Subject')
    this.$context.mail.setHtml('Html mail')
    await this.$context.mail.send()
    this.$context.response.setOutput({ "mail": "test" });
  }
  @GET("/test")
  public async test() {
    this.$context.cache.set("test", { "1": "2" });
    this.$context.cache.get("test");
    await this.$context.load.model("common/home");
    const test = await this.$context.model_common_home.test();
    this.$context.response.setOutput({ "test": test });
  }

  @GET("/test/:id")
  public home2() {
    this.$context.response.setOutput(
      { "test": this.$context.request.params.id },
    );
  }

  @POST("/test")
  public homePost() {
    this.$context.response.setOutput(this.$context.request.post);
  }
}
