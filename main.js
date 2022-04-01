const submissionComponent = {
  template: `<div style="display:flex; width:100%">
            <figure class="media-left">
            <img
              class="image is-64x64"
              v-bind:src="submission.submissionImage"  
            />
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>
                  <a :href="submission.url" class="has-text-info">
                    {{submission.title}}
                    <span class="tag is-small">#{{submission.id}}</span>
                  </a>
                </strong>
                <br />
                {{submission.description}}
                <br />
                <small cla ss="is-size-7">
                  Submitted by:
                  <img class="image is-24x24" v-bind:src="submission.avatar" />
                </small>
              </p>
            </div>
          </div>
           <div class="media-right">
            <span class="icon is-small" v-on:click="upvote(submission.id)">
              <i class="fa fa-chevron-up">
                <strong class="has-text-info">{{submission.votes}}</strong>
              </i>
            </span>
          </div>
  </div>`,
  props: ["submission", "submissions"],
  methods: {
    upvote(submissionId) {
      const submission = this.submissions.find(
        (submission) => submission.id === submissionId
      );
      submission.votes++;
    },
  },
};
const upvote = {
  data() {
    return {
      submissions: Seed.submissions,
    };
  },
  computed: {
    sortedSubmissions() {
      return this.submissions.sort((a, b) => {
        //sorting in descending order
        return b.votes - a.votes;
      });
    },
  },

  components: {
    "submission-component": submissionComponent,
  },
};
Vue.createApp(upvote).mount("#app");
